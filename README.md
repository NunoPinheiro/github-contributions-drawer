# Github Contributions Drawer

Draw your github contributions from the last year on github!

![alt tag](https://raw.githubusercontent.com/NunoPinheiro/github-contributions-drawer/master/sample.png)

## Usage

### How it works
This project generates a bunch of bash lines based on your drawing. You just run them in your console (inside your git project),

### Why so many parameters?
We really need all this information to generate valid commits!
- Your Name (or a fake one?)
- Your github e-mail address
- Commit Message - The commit message to be used
- File Name - We need some content to make the commit, so we need a file to change!
- Text to append - We are just appending "stuff" to the chosen file. Choose your content!
- Commits density: If you want this drawing to be visible in the middle of all your "real" commits, you need an higher number of commits in the drawing. Just pick how many you want per click!

### Push the Buttons!
Just click on the generate button to get the bash lines! Copy paste them and push!
Notice that Github may take some time to update your drawing.

Btw, want to check how many commits are in each point? Just toggle the contribution details to see them.

## Tips and Samples

### "Hacking" a Friend's GitHub
Want to add contributions to a friend's github?
You need to follow some guidelines for the commits to be enabled in your friend's profile:
https://help.github.com/articles/why-are-my-contributions-not-showing-up-on-my-profile/

According to github, the easier way to do this would be to add your friend as a contributor of the project with the commits.

Also, you need to use an e-mail address your friend has binded to his github profile.

### Sample Case
I generated some commits to a repo:
https://github.com/NunoPinheiro/github-contributions-drawer-test

You can see the drawing in my smurf profile:
https://github.com/nunogrilo

I added my smurf account as a contributor for the commits to appear.

## Inspirations
This project was inspired by other similar projects:
- https://github.com/avinassh/rockstar
- https://github.com/amoffat/masquerade/

## Projects Used
Want to have your own contributions chart in your applications? Check the lib we're using:
https://github.com/DKirwan/calendar-heatmap
