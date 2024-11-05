
//todo: Without Promise

/*
getUserData(userId, function(userError, user) {
    if (userError) {
      console.error('Error fetching user data:', userError);
    } else {
      getPosts(user.id, function(postsError, posts) {
        if (postsError) {
          console.error('Error fetching posts:', postsError);
        } else {
          getComments(posts[0].id, function(commentsError, comments) {
            if (commentsError) {
              console.error('Error fetching comments:', commentsError);
            } else {
              console.log('Comments:', comments);
            }
          });
        }
      });
    }
  });

*/

//todo: With Promise

/*

getUserData(userId)
  .then(user => getPosts(user.id))
  .then(posts => getComments(posts[0].id))
  .then(comments => console.log('Comments:', comments))
  .catch(error => console.error('Error:', error));

*/