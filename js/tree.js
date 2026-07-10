import { buildForkTree } from "./data.js";

export function openTree(projectName) {
  document.getElementById("tree-modal").classList.add("open");
  document.body.classList.add("modal-open");
  renderD3ForkTree(projectName);
}

export function closeTree() {
  document.getElementById("tree-modal").classList.remove("open");
  document.body.classList.remove("modal-open");
}

let nodeIdCounter = 0;

// Renders the fork family tree for a project as a neobrutalist D3 block diagram,
// showing each project's name and version, with pan/zoom and collapse/expand.
function renderD3ForkTree(rootProjectName) {
  const container = document.getElementById("tree-container");
  if (!container) return;

  container.innerHTML = "";

  const treeData = buildForkTree(rootProjectName);

  const width = container.clientWidth || window.innerWidth;
  const height = container.clientHeight || 500;

  const svg = d3.select("#tree-container").append("svg")
    .attr("width", "100%")
    .attr("height", "100%");

  const defs = svg.append("defs");
  defs
    .append("pattern")
    .attr("id", "grid-pattern")
    .attr("width", 24)
    .attr("height", 24)
    .attr("patternUnits", "userSpaceOnUse")
    .append("path")
    .attr("d", "M 24 0 L 0 0 0 24")
    .attr("fill", "none")
    .attr("stroke", "#151515")
    .attr("stroke-width", "3");

  const bgGroup = svg.append("g");
  bgGroup.append("rect")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("fill", "url(#grid-pattern)");

  const zoomBehavior = d3.zoom()
    .scaleExtent([0.4, 2])
    .on("zoom", (event) => {
      svgGroup.attr("transform", event.transform);
    });

  svg.call(zoomBehavior);

  const svgGroup = svg.append("g");

  // Set the initial pan position through the zoom behavior itself, so the
  // first render doesn't jump when the user starts panning.
  const initialX = 100;
  const initialY = height / 2;
  svg.call(zoomBehavior.transform, d3.zoomIdentity.translate(initialX, initialY));

  const blockWidth = 160;
  const blockHeight = 48;

  const treeLayout = d3.tree().nodeSize([72, 260]);
  const root = d3.hierarchy(treeData);

  root.x0 = 0;
  root.y0 = 0;

  // Redraws nodes/links, animating collapses, expansions and layout changes.
  function update(source) {
    const laidOutTree = treeLayout(root);
    const nodes = laidOutTree.descendants();
    const links = laidOutTree.links();

    nodes.forEach((d) => (d.y = d.depth * 220));

    const node = svgGroup.selectAll("g.node")
      .data(nodes, (d) => d.id || (d.id = ++nodeIdCounter));

    const nodeEnter = node.enter().append("g")
      .attr("class", (d) => {
        const hasChildren = d.children || d._children;
        const isCollapsed = d._children;
        return "node" + (!hasChildren ? " node--leaf" : "") + (isCollapsed ? " node--collapsed" : "");
      })
      .attr("transform", (d) => `translate(${source.y0 ?? d.y}, ${source.x0 ?? d.x})`);

    nodeEnter.append("rect")
      .attr("class", "block-card")
      .attr("width", blockWidth)
      .attr("height", blockHeight)
      .attr("x", -blockWidth / 2)
      .attr("y", -blockHeight / 2)
      .style("fill", "#141414")
      .style("stroke-width", "2px")
      .style("cursor", (d) => (d.data.project?.url ? "pointer" : "default"))
      .style("filter", "drop-shadow(4px 4px 0px #000)")
      .style("stroke", (d) => {
        const status = d.data.project?.status?.toLowerCase();
        switch (status) {
          case "maintained":
            return "var(--green)";
          case "rarely-updated":
            return "var(--yellow)";
          case "migrated":
            return "var(--blue)";
          case "deprecated":
            return "var(--orange)";
          case "abandoned":
            return "var(--danger)";
          default:
            return "var(--border)";
        }
      })
      .on("click", (event, d) => {
        if (d.data.project && d.data.project.url) {
          window.open(d.data.project.url, "_blank");
        }
      });

    nodeEnter.append("text")
      .attr("dy", ".35em")
      .attr("y", -6)
      .attr("text-anchor", "middle")
      .style("fill", "#ffffff")
      .style("font-family", "monospace")
      .style("font-size", "12px")
      .style("font-weight", "bold")
      .style("pointer-events", "none")
      .text((d) => d.data.name);

    nodeEnter.append("text")
      .attr("dy", ".35em")
      .attr("y", 12)
      .attr("text-anchor", "middle")
      .style("fill", "#a0a0a0")
      .style("font-family", "monospace")
      .style("font-size", "10px")
      .style("font-weight", "500")
      .style("pointer-events", "none")
      .text((d) => {
        const version = d.data.project?.version;
        return version ? `${version}` : "";
      });

    // Collapse/expand toggle, pinned to the right edge of the block.
    const toggleButton = nodeEnter.append("g")
      .attr("class", "toggle-btn-group")
      .attr("transform", `translate(${blockWidth / 2}, 0)`)
      .style("cursor", "pointer")
      .on("click", (event, d) => {
        event.stopPropagation();
        if (d.children) {
          d._children = d.children;
          d.children = null;
        } else if (d._children) {
          d.children = d._children;
          d._children = null;
        }
        update(d);
      });

    toggleButton.append("rect")
      .attr("width", 16)
      .attr("height", 16)
      .attr("x", -8)
      .attr("y", -8)
      .style("fill", "#141414")
      .style("stroke", "#fff")
      .style("stroke-width", "1.5px");

    toggleButton.append("text")
      .attr("class", "toggle-icon-text")
      .attr("dy", ".255em")
      .attr("text-anchor", "middle")
      .style("fill", "#fff")
      .style("font-family", "monospace")
      .style("font-size", "18px")
      .style("font-weight", "bold")
      .style("pointer-events", "none")
      .text((d) => (d.children ? "-" : "+"));

    const nodeUpdate = nodeEnter.merge(node);

    nodeUpdate.transition().duration(400)
      .attr("transform", (d) => `translate(${d.y}, ${d.x})`);

    nodeUpdate.each(function (d) {
      const group = d3.select(this);
      const hasChildren = d.children || d._children;

      const btn = group.select(".toggle-btn-group")
        .style("display", hasChildren ? "block" : "none");

      btn.select(".toggle-icon-text").text(d.children ? "-" : "+");
    });

    node.exit().transition().duration(400)
      .attr("transform", (d) => `translate(${source.y}, ${source.x})`)
      .remove();

    const link = svgGroup.selectAll("path.link")
      .data(links, (d) => d.target.id);

    const linkEnter = link.enter().insert("path", "g")
      .attr("class", "link")
      .attr("d", (d) => {
        const o = { x: source.x0 ?? source.x, y: source.y0 ?? source.y };
        return orthogonalPath(o, o);
      })
      .style("fill", "none")
      .style("stroke", "#2a2a2a")
      .style("stroke-width", "2px");

    const linkUpdate = linkEnter.merge(link);

    linkUpdate.transition().duration(400)
      .attr("d", (d) => orthogonalPath(d.source, d.target));

    link.exit().transition().duration(400)
      .attr("d", (d) => {
        const o = { x: source.x, y: source.y };
        return orthogonalPath(o, o);
      })
      .remove();

    nodes.forEach((d) => {
      d.x0 = d.x;
      d.y0 = d.y;
    });
  }

  // Draws a right-angled (orthogonal/step) connector between two points.
  function orthogonalPath(s, d) {
    return `M ${s.y} ${s.x}
            L ${(s.y + d.y) / 2} ${s.x}
            L ${(s.y + d.y) / 2} ${d.x}
            L ${d.y} ${d.x}`;
  }

  d3.select("#zoom-in").on("click", () => {
    svg.transition().duration(250).call(zoomBehavior.scaleBy, 1.3);
  });

  d3.select("#zoom-out").on("click", () => {
    svg.transition().duration(250).call(zoomBehavior.scaleBy, 0.75);
  });

  d3.select("#zoom-reset").on("click", () => {
    svg.transition().duration(400).call(
      zoomBehavior.transform,
      d3.zoomIdentity.translate(initialX, initialY)
    );
  });

  update(root);
}
