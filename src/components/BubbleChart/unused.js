import * as d3 from "d3";
import BaseChart from "../BaseChart";
import * as d3plus from "d3plus";
import '../../style.css';



export default class BubbleChart extends BaseChart {

        original
        addText() {
            this.text = this.node.append("text")
                .attr("dy", ".3em")
                .attr("class", "bubble-text")
                .style("text-anchor", "middle")
                .style("pointer-events", "none")
                .text(this.setText);
        }

      // addText() {
      //
      //     console.log('in da addText', this.node);
      //     this.text = this.node.append("text")
      //         .attr("class", "bubble-text")
      //         .style("pointer-events", "none")
      //         .call(wrap, 300)
      //         .text(this.setText);
      // //
      //
      //         console.log(this.text);
      //
      //
      //     function wrap(text, width) {
      //       text.each(function() {
      //         var text = d3.select(this),
      //             words = text.text().split(/\s+/).reverse(),
      //             word,
      //             line = [],
      //             lineNumber = 0,
      //             lineHeight = 1.1, // ems
      //             y = text.attr("y"),
      //             dy = parseFloat(text.attr("dy")),
      //             tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
      //                 console.log(' in da wrap, text',this)
      //         while (word = words.pop()) {
      //           line.push(word);
      //           tspan.text(line.join(" "));
      //           if (tspan.node().getComputedTextLength() > width) {
      //             line.pop();
      //             tspan.text(line.join(" "));
      //             line = [word];
      //             tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
      //           }
      //         }
      //       });
      //     }
      // }



    // for now add this part so only the second part of the text is
    // displayed when updated, otherwise the whole line will be shown when updating
    setText(node) {
      // custom added
      let text = node.data.name;
      let pos = text.indexOf(' ', text.length / 2);
      if(pos < (text.length / 2 + 5)) {
         text = text.substring(pos+1);
      }
      // custom end ---- original only:
      if (node.data.value > 0) { return text; }
    }

    onMouseOver(node) {
        return this.tooltip
            .style("visibility", "visible")
            .text(`${node.data.name} (${node.data.value})`);
    }

    onClick(node) {
        console.log('in da onClick', node.data.name.substring);
       this.props.history.push( '/topics/'+node.data.topicId);
    }

    create(data) {
        this.bubble = d3.pack()
            .size([this.props.diameter, this.props.diameter])
            .padding(1.5);

        this.root = d3.hierarchy(data).sum(nodeData => nodeData.value);

        this.svg = d3.select(this.el).append("svg")
            .attr("width", this.props.diameter)
            .attr("height", this.props.diameter)
            .attr("class", "bubble");



        this.node = this.svg.selectAll(".node")
            .data(this.bubble(this.root).children)
            .enter().append("g")
                .attr("class", "node")
                .attr("transform", d => { return `translate(${d.x}, ${d.y})`; });

        this.node.append("circle")
            .attr("r", node => { return node.r; })
            .style("fill", node => { return this.color(node.data.name); })
            .on("mouseover", this.onMouseOver.bind(this))
            .on("mousemove", this.onMouseMove.bind(this))
            .on("mouseout", this.onMouseOut.bind(this))
            .on("click", this.onClick.bind(this));

        d3.select(document.frameElement).style("height", `${this.props.diameter} px`);

        this.addText();

        if (this.showTooltips) {
            this.addTooltips();
        }
    }

    update(data) {
        const formattedData = this.bubble(this.root).children;

        this.node = this.svg.selectAll(".node")
            .data(formattedData);

        const nodeEnter = this.node.enter()
            .append("g")
            .attr("class", "node")
            .attr("transform", d => { return `translate(${d.x}, ${d.y})`; });

        nodeEnter
            .append("circle")
            .attr("r", d => { return d.r; })
            .style("fill", (d, i) => { return this.color(i); })
            .on("mouseover", this.onMouseOver.bind(this))
            .on("mousemove", this.onMouseMove.bind(this))
            .on("mouseout", this.onMouseOut.bind(this))
            .on("click", this.onClick.bind(this));



        this.text
            .data(formattedData)
            .text(this.setText);

        this.node.select("circle")
            .transition().duration(this.transitionDuration)
            .attr("r", d => {
                return d.r;
            })
            .style("fill", (d, i) => {
                return this.color(i);
            });

        this.node.transition().attr("class", "node")
            .attr("transform", d => {
                return `translate(${d.x}, ${d.y})`;
            });

        this.node.exit().remove();
    }
}
