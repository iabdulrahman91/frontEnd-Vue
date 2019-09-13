// addRange(b){
//     this.ranges = [...this.attributes[0].dates]
//     if (this.ranges.length === 0) {
//         this.ranges.push(b)
//     } else {
//         let i;
//         for (i = 0; i < this.ranges.length; i++){
//             let a = this.ranges[i];
//             let newRange = {start: null, end: null}
//             // if a.start before b.start
//             if (a.start - b.start < 0){
//                 // if a.end same as the start of b or the start of b is right after the end of a
//                 if (a.end - b.start === 0 || a.end - b.start === -1){
//                     newRange.start = a.start
//                     newRange.end = b.end
//                     a.start = newRange.start
//                     a.end = newRange.end
//                     b.start = newRange.start
//                     b.end = newRange.end
//                     // if the end of a is after the start of b
//                 } else if (a.end - b.start > 0) {
//                     newRange.start = a.start
//                     // choose whatever later end
//                     newRange.end = (a.end - b.end < 0)? b.end : a.end
//                     a.start = newRange.start
//                     a.end = newRange.end
//                     b.start = newRange.start
//                     b.end = newRange.end
//
//                     // if the start of b is after tomorrow of a.end
//                     // then just add new range
//                 } else {
//                     newRange.start = b.start
//                     newRange.end = b.end
//                 }
//
//                 // if the start of a is after the the start of b
//             } else if (a.start - b.start > 0){
//
//                 // if the start of a is the same day of the end of b or a start is right after the end of b
//                 if (a.start - b.end === 0 || a.start - b.end === 1 ){
//                     newRange.start = b.start
//                     newRange.end = a.end
//                     a.start = newRange.start
//                     a.end = newRange.end
//                     b.start = newRange.start
//                     b.end = newRange.end
//
//                     // if the start of a is before the end of b
//                 } else if (a.start - b.end < 0){
//                     newRange.start = b.start
//                     // choose whatever later end
//                     newRange.end = (a.end - b.end < 0)? b.end : a.end
//                     a.start = newRange.start
//                     a.end = newRange.end
//                     b.start = newRange.start
//                     b.end = newRange.end
//                     // if the end of b is two days before a.start
//                     // then just add new range
//                 } else {
//                     newRange.start = b.start
//                     newRange.end = b.end
//                 }
//             } else if (a.start - b.start === 0){
//                 if (a.end - b.end === 0){
//                     this.ranges.splice(i,1)
//
//                     break;
//                 } else {
//                     newRange.start = a.start
//                     newRange.end = (a.end - b.end < 0)? b.end : a.end
//                     this.ranges.splice(i,1)
//                     this.ranges.push(newRange)
//                     break
//                 }
//             }
//         }
//     }
//     this.selection = null
//     this.attributes[0].dates = [...this.ranges];
// }
