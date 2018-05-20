docker container run \
--env AWS_ACCESS_KEY_ID=AKIAIEB3UWNZPAKRKLOQ \
--env AWS_SECRET_ACCESS_KEY=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 \
-v $PWD/build:/data \
garland/aws-cli-docker \
aws s3 sync . s3://www.typing-coacher.net --delete