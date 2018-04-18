const tf = require('@tensorflow/tfjs');
// const shape = [4, 2];
// const a = tf.tensor([1.0, 2.0, 3.0, 10.0, 20.0, 30.0, 11.0, 12.0], shape);
// a.print(); // print Tensor values

const c1 = tf.tensor1d([1.0, 2.0, 3.0]);
// const c2 = tf.tensor2d([[1.0, 2.0, 3.0], [10.0, 20.0, 30.0]]);
// // const c3 = tf.tensor3d([[[10.0, 20.0, 30.0],[1.0,2.0,3.0]]]);
// // const c4 = tf.tensor4d([[[[10.0, 20.0, 30.0],[1.0,2.0,3.0]]]]);

// var a = tf.scalar(2)

// const c2mul = a.mul(c2);
// c2mul.print()
// c4.print();

// const initialValues = tf.zeros([5]);
// const biases = tf.variable(initialValues); // initialize biases
// biases.print(); // output: [0, 0, 0, 0, 0]

// const updatedValues = tf.tensor1d([0, 1, 0, 1, 0]);
// biases.assign(updatedValues); // update values of biases
// biases.print(); // output: [0, 1, 0, 1, 0]

// const e = tf.tensor2d([[1.0, 2.0], [3.0, 4.0]]);
// const f = tf.tensor2d([[5.0, 6.0], [7.0, 8.0]]);

// // const sq_sum = e.add(f).square();
// // sq_sum.print();
// // Output: [[36 , 64 ],
// //          [100, 144]]

// // All operations are also exposed as functions in the main namespace,
// // so you could also do the following:
// const sq_sum = tf.square(tf.add(e, f));
// sq_sum.print();

// Define function
// function predict(input) {
//     // y = a * x ^ 2 + b * x + c
//     // More on tf.tidy in the next section
//     return tf.tidy(() => {
//       const x = tf.scalar(input);
//       const ax2 = a.mul(x.square());
  
//       const bx = b.mul(x);
    
//       const y = ax2.add(bx).add(c);
  
//       return y;
//     });
//   }
  
//   // Define constants: y = 2x^2 + 4x + 8
//   const a = tf.scalar(2);
//   const b = tf.scalar(4);
//   const c = tf.scalar(8);
 
//   // Predict output for input of 2
//   const result = predict(2);
//   result.print() // Output: 24

// Fit a quadratic function by learning the coefficients a, b, c.
// const xs = tf.tensor1d([0, 1, 2, 3]);
// const ys = tf.tensor1d([1.1, 5.9, 16.8, 33.9]);

// const a = tf.scalar(Math.random()).variable();
// const b = tf.scalar(Math.random()).variable();
// const c = tf.scalar(Math.random()).variable();

// // y = a * x^2 + b * x + c.
// const f = x => a.mul(x.square()).add(b.mul(x)).add(c);
// const loss = (pred, label) => pred.sub(label).square().mean();

// Create a buffer and set values at particular indices.
// const buffer = tf.buffer([3, 3]);
// buffer.set(5, 1, 0);
// console.log(buffer)

// buffer.set(3, 2, 0);
// console.log(buffer)

// // Convert the buffer back to a tensor.
// buffer.toTensor().print();

// const buffer = tf.buffer([3,3],dtype="float32")
// buffer.set(5, 1, 2);
// buffer.set(3, 2, 0);
// 克隆
// c1.print()
// const clone = tf.clone(c1)
// clone.print()

// tf.fill([2, 2], 2).print();

// tf.linspace(0, 9, 10).print();

// const tensor2d = tf.tensor2d([[1, 2,2]])

// tf.oneHot(tensor2d, 3).print();

tf.ones([5, 5]).print();
