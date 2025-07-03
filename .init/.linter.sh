#!/bin/bash
cd /home/kavia/workspace/code-generation/timenowapi-120416-06a2e6a1/express_backend
npm run lint
LINT_EXIT_CODE=$?
if [ $LINT_EXIT_CODE -ne 0 ]; then
  exit 1
fi

