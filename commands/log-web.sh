#!/bin/bash
KUBEPODS=$(kubectl get pods | grep web)
WEBNAME="${KUBEPODS%% *}"
kubectl logs -f $WEBNAME
