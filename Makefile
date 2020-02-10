default:
	@ cat ./Makefile

IMAGE_TAG=hejare-github-io

run:
	docker build --tag $(IMAGE_TAG) ./
	docker run \
		--rm \
		--interactive \
		--tty \
		--mount type=bind,source=$(shell PWD),target=/srv/jekyll \
		--mount type=volume,target=$(shell PWD)/.git \
		-p 4000:4000 \
		$(IMAGE_TAG) \
		bundle exec jekyll serve \
			--port 4000 \
			--host 0.0.0.0 \
			--force_polling
