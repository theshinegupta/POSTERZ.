module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/orders/customOrder',
        handler: 'order.customOrderController',
      },
    ],
  };

  // here we can also add polices and middleware as like in express
  // it is using koa for api calls
   