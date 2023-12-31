const baseURL = "https://trinitylifeministry.com";

module.exports = {
  uids: {
    apply: "api::apply.apply",
    blog: "api::post.post",
    category: "api::category.category",
    contact: "api::contact.contact",
    donation: "api::donation-page.donation-page",
    home: "api::home-page.home-page",
    thriftStore: "api::thrift-store.thrift-store",
    whoWeAre: "api::who-we-are.who-we-are",
  },
  urls: {
    apply: `${baseURL}/apply`,
    blog: `${baseURL}/blog/{slug}`,
    contact: `${baseURL}/contact`,
    donation: `${baseURL}/donate`,
    home: baseURL,
    whoWeAre: `${baseURL}/who-we-are`,
    thriftStore: `${baseURL}/thrift-store`,
  },
};
