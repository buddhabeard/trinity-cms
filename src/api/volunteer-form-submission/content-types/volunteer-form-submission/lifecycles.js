module.exports = {
  async afterCreate(event) {
    try {
      await fetch("https://pfrrthx5az.us.aircode.run/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(event.result),
      }).then((res) => console.log(res.json()));
    } catch (err) {
      console.log(err);
    }
  },
};
