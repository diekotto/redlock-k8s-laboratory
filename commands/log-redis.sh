#!/bin/bash
KUBEPODS=$(kubectl get pods | grep redis)
REDISNAME="${KUBEPODS%% *}"
watch kubectl exec -it $REDISNAME -- redis-cli keys "\\*"
