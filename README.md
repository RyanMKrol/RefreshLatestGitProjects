# RefreshLatestGitProjects

This is a neat little script that will push an update to any Github project you provide an ID to!

## Why?

I found that when I was cleaning up my repositories in GitHub and archiving projects that were no longer active, I'd typically do the following:

1. Update the README to provide a reason for deprecation
1. Put the repo into public archive mode

The problem with this is that by providing one last commit, these super old projects are now the first thing you see on my profile when you head to my list of repos.

Rather than go through every non-archived repo I have, and creating a dummy commit to put the projects back in some order of relevancy, I've created this script to do it for me!

## How?

Running the script is pretty simple, you can run it by doing the following:

1. `git clone https://github.com/RyanMKrol/RefreshLatestGitProjects`
1. `cd RefreshLatestGitProjects`
1. `npm install`
1. `npm run run:script -- -p ProjectNameA ProjectNameB ProjectNameC ProjectNameEtc`

Once the script has finished running, each of the projects you've specified will have a blank commit with the title "Blank Update".

For this script to work, your directory structure **MUST** look like the following:

```
dir
└───RefreshLatestGitProjects
└───ProjectNameA
└───ProjectNameB
└───ProjectNameC
└───ProjectNameEtc
```

## Warning

Running this script is extremely dangerous. It will not wait for you to confirm your choices, and it will be as if you yourself are running the commands within the script to update your repositories manually.

**Proceed with caution**
