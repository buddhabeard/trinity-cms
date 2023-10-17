const dotenv = require("dotenv");
const { uids, urls } = require("./_previewConfig");

dotenv.config();

module.exports = {
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        post: {
          field: "slug",
          references: "title",
        },
      },
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_KEY,
        api_secret: process.env.CLOUDINARY_SECRET,
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  "preview-button": {
    config: {
      contentTypes: [
        {
          uid: uids.apply,
          published: {
            url: urls.apply,
          },
        },
        {
          uid: uids.blog,
          published: {
            url: urls.blog,
          },
        },
        {
          uid: uids.contact,
          published: {
            url: urls.contact,
          },
        },
        {
          uid: uids.donation,
          published: {
            url: urls.donation,
          },
        },
        {
          uid: uids.events,
          published: {
            url: urls.events,
          },
        },
        {
          uid: uids.home,
          published: {
            url: urls.home,
          },
        },
        {
          uid: uids.whoWeAre,
          published: {
            url: urls.whoWeAre,
          },
        },
        {
          uid: uids.thriftStore,
          published: {
            url: urls.thriftStore,
          },
        },
      ],
    },
  },
  ezforms: {
    config: {
      enableFormName: true,
      captchaProvider: {
        name: "none",
      },
      notificationProviders: [],
    },
  },
};
