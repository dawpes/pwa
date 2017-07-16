var pirateManager = (() => {
  var commentList = [];
  return {
    getComments: getComments,
    postComment: postComment,
    commentList: commentList,
    getCommentData: getCommentData
  };

  function getComments() {
    return fetch('https://pirates-b74f7.firebaseio.com/commentList.json')
      .then((response) => response.json())
      .then((data) => {
        this.commentList = data;
        return this.commentList;
      });
  }

  function postComment() {
      let payload = getCommentData();

      let data = JSON.stringify(payload);

      return fetch("https://pirates-b74f7.firebaseio.com/commentList.json",
      {
          method: "POST",
          body: data
      })
      .then((response) => {
        response.json();
      });
    }

    function getCommentData() {
      let d = new Date();
      return {
        commentText: 'Arrrgh!',
        date: (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
      };
    }

})();