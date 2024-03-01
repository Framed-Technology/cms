    // ~/strapi-aws-s3/backend/config/plugins.js
    
    module.exports = ({ env }) => ({
        upload: {
          config: {
            provider: 'aws-s3',
            providerOptions: {
              accessKeyId: env('R2_ACCESS_KEY'),
              secretAccessKey: env('R2_SECRET_ACCESS_KEY'),
              params: {
                ACL: env('AWS_ACL', 'public-read'),
                signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
                Bucket: env('AWS_BUCKET'),
              },
            },
            actionOptions: {
              upload: {},
              uploadStream: {},
              delete: {},
            },
          },
        },
  });