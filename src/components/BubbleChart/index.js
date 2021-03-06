import * as d3 from "d3";
import BaseChart from "../BaseChart";
import * as d3plus from "d3plus";
import '../../style.css';



export default class BubbleChart extends BaseChart {


      addText() {
          this.text = this.node.append("text")
              .attr("dy", "-0.3em")
              .attr("class", "bubble-text")
              .style("text-anchor", "middle")
              .style("pointer-events", "none")
              .style("font-size", function(d) {
                     let len = d.data.name.substring(0, d.r / 3).length;
                     let size = d.r/3;
                     size *= 10 / len;
                     size += 1;
                     return Math.round(size)+'px';
               })
              .text(function(d) {
                       let text = d.data.name;
                      //  console.error("Initial value - ", text);
                       let pos = text.indexOf(' ', text.length / 2);
                       if(pos < text.length / 2 + 5) {
                          text = text.substring(0, pos);
                       }
                    return text;
                })

               this.text = this.node.append("text")
                   .attr("dy", "0.9em")
                   .attr("class", "bubble-text")
                   .style("text-anchor", "middle")
                   .style("pointer-events", "none")
                   //custom text from here ----
                   .style("font-size", function(d) {
                          let len = d.data.name.substring(0, d.r / 3).length;
                          let size = d.r/3;
                          size *= 10 / len;
                          size += 1;
                          return Math.round(size)+'px';
                    })
                   .text(function(d) {
                          let text = d.data.name;
                          let pos = text.indexOf(' ', text.length / 2);
                          // console.error("Initial value --- ", text, pos, (text.length / 2 + 5));
                          if(pos < (text.length / 2 + 5)) {
                             text = text.substring(pos+1);
                          }
                          return text;
                      })
}


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
