module.exports = ({ env }) => ({
  url: env("RENDER_EXTERNAL_URL"),
  host: env("HOST", "0.0.0.0"),
  port: env("PORT", "1337"),
});
