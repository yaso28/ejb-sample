#!/bin/bash
cd `dirname $0`

docker image tag ejb-sample-ejb1 mdboetco.azurecr.io/ejb-sample-ejb1:1.0
docker image tag ejb-sample-ui1 mdboetco.azurecr.io/ejb-sample-ui1:1.0
