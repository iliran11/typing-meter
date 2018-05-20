docker container run \
--env AWS_ACCESS_KEY_ID=AWS_ACCESS_KEY_ID \
--env AWS_SECRET_ACCESS_KEY=AWS_SECRET_ACCESS_KEY  \
-v $PWD/build:/data \
garland/aws-cli-docker \
echo $AWS_ACCESS_KEY_ID