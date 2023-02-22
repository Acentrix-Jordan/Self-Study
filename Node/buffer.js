// Create Buffer
const buffer = new Buffer.from("Jordan", "utf-8");

console.log(buffer.toJSON());

// Output
// {
//     type: 'Buffer',
//     data: [ 74, 111, 114, 100, 97, 110 ]
// }

console.log(buffer);
// Output
// <Buffer 4a 6f 72 64 61 6e>
