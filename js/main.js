$(document).ready(function () {
    var api = "https://api.github.com/repos/meanjs/mean/commits";
    var twelveCommits = {}
    var author = {};
    var date = {};
    var comment = {};

    $.get(api, function (data) {
        twelveCommits = data.slice(0, 12);
        $.each(twelveCommits, function (idx, obj) {
            author = obj.commit.committer.name;
            date = obj.commit.committer.date;
            comment = obj.commit.message;

            console.log(author);
            console.log(date);
            console.log(comment);
        });
    });
});

// This is getting the first 12 commits on the mean.js repo on Github.
// Rework previous CodeAlong to put this information into a table
// Make it Responsive
// Make it not look like garbage :)
