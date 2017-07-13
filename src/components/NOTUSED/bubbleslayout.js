
// class BubblesLayout extends Component {
//
//   constructor(props) {
//     super(props);
//
//     const data = [];
//     const numRows = 30;
//     const numCols = 50;
//     const freqRng = d3.randomNormal(100, 15);
//     const accRng = d3.randomNormal(0.45, 0.1);
//     const rankRng = () => Math.ceil(Math.random() * 300);
//
//     for (let x = 0; x < numCols; x++) {
//       for (let y = 0; y < numRows; y++) {
//         const freq = freqRng();
//         data.push({ locationX: x, locationY: y, frequency: freq < 0 ? 0 : freq, accuracy: accRng(), rank: rankRng() });
//       }
//     }
//
//     this.state = {
//       data: data
//     }
//   }
//
//   // render the line chart and radial heatmap
//   render() {
//     const { data } = this.state;
//
//     return (
//         <div className='example'>
//           <VisExample3 width={1000} height={500} data={data} />
//       </div>
//     );
//   }
// }
//
// export default connect()(BubblesLayout);
