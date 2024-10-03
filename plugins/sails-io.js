const io = require("sails.io.js")(require("socket.io-client"));

io.sails.url = `${process.env.NUXT_ENV_API_URL}`;

// export default (context, inject) => {
//   // You can listen to WebSocket events here
//   inject("io", io);
// };

export default (context, inject) => {
    io.socket.on("user", (message) => {
      switch (message.new) {
        case "followed":
          context.store.dispatch("userFollowed", message.notification);
          break;
      }
    });
    inject("io", io);
  }