"use strict";
// const emailTemplate = `
// <div>
//   <h1>hola</h1>
//   <p>impresion</p>
// </div>;`;
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailTemplate = void 0;
// module.exports = {
//   emailTemplate,
// };
exports.emailTemplate = `
<div>
    <h1>Hi, {{name}}</h1>
    <p>Thank you for your order.</p>
    <p>Order ID: {{orderId}}</p>
</div>`;
