# Clisonix GitHub Pages document hub

The archive remains hosted at https://ledjanahmati.github.io/clisonix-blog/.
The restored March document interface reads static JSON beside the website;
individual documents also have permanent HTML links. No application-server
database, LinkedIn API or personal access token is required to read the site.

Existing `_posts`, `posts`, `static` and compatibility files are preserved.
Historical posts retain their dates; inclusion is not new scientific validation.
New engineering documents are imported only from the reviewed manifest on
`Web8kameleon-hub/clisonix.com` main after checking the exact source digest.

The publication workflow runs every half hour and on source-post changes.
Unchanged documents do not create fresh publication dates or duplicate commits.
The workflow uses this repository's own GitHub Actions token and requests a
native GitHub Pages build after an actual update. Workflow source and blog
commit identities are recorded separately from the Pages deployment result.

Before release, the static builder verifies every article's JSON, HTML and
search content, counts and feeds. After release, verify the deployed Pages
commit and representative public article links. To recover, revert the release
commit normally and request a Pages build; preserve original content history.

The original homepage before this recovery is preserved in Git at
`092bc2bd` and in the existing `index.html.bak` file. No existing source article
is removed by the recovery.
