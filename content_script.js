var comments = [].slice.call(document.querySelectorAll('.timeline-comment-wrapper'), 0);
var avatars = [];
comments.forEach(function(comment) {
  var text = comment.querySelector('.comment-body').textContent.trim();
  if (text.match(/^\+1/)) {
    avatars.push(comment.querySelector('a').cloneNode(true));
    if (text.match(/^\+1$/)) {
      comment.style.display='none';
    }
  }
});

if (avatars.length > 0) {
  var div = document.createElement('div');
  div.className = 'flex-table gh-header-meta';
  div.innerHTML = ''+
    '<div class="flex-table-item">'+
    '  <div class="state" style="background: hsl(215, 50%, 50%)">'+
    '    <span class="octicon octicon-thumbsup"></span>'+
         avatars.length+
    '  </div>'+
    '</div>'+
    '<div class="flex-table-item flex-table-item-primary"></div>';

  var avatarContainer = div.querySelector('.flex-table-item-primary');
  avatarContainer.style.paddingTop = 0;

  avatars.forEach(function(avatar) {
    var img = avatar.querySelector('img');
    img.className = '';
    img.style.height = '26px';
    img.style.width = '26px';
    img.style.margin = '0 2px';
    img.style.borderRadius = '3px';
    avatarContainer.appendChild(avatar);
  });

  document.querySelector('.gh-header-show').appendChild(div);
}

