// const emailTemplate = `
// <div>
//   <h1>hola</h1>
//   <p>impresion</p>
// </div>;`;

// module.exports = {
//   emailTemplate,
// };

export const emailTemplate = `
<div>
    <h1>Hi, {{name}}</h1>
    <p>Thank you for your order.</p>
    <p>Order ID: {{orderId}}</p>
</div>`;
