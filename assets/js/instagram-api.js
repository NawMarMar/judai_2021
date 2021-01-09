window.instagram = window.instagram || {};

instagram = function (access_token) {
  var accessToken = access_token;
  var url = "https://graph.instagram.com";

  this.getAccessToken = function () {
    return accessToken;
  };

  this.getUrl = function () {
    return url;
  };

  // inject <script> into <body> to request as 'get' method
  this.jsonp = function (url, callback) {
    var cb = 'jsonp_callback_' + Math.round(100000 * Math.random());
    window[cb] = function (data) {
      delete window[cb];
      document.body.removeChild(script);
      callback(data);
    };

    var script = document.createElement('script');
    script.src = instagram.getUrl() + url + (url.indexOf('?') !== -1 ? '&' : '?') + 'callback=' + cb;
    document.body.appendChild(script);
  };
};

instagram.prototype.user = {

  /*	
    method: GET
    url: /me?fields=id,username,account_type,media_count
    callback: [function]
  */
  self: function (callback) {
    var url = "/me?fields=id,username,account_type,media_count" +
      "&access_token=" + instagram.getAccessToken();

    instagram.jsonp(url, function (res) {
      callback(res);
    });
  },

  /*	
    method: GET
    url: /me/?fields=id
    callback: [function]
  */
  id: function (callback) {
    var url = "/me/?fields=id&access_token=" + instagram.getAccessToken();

    instagram.jsonp(url, function (res) {
      callback(res);
    });
  },

  /*	
    method: GET
    url: /me/media?fields=id,caption,media_type,media_url,permalink
    param: {
      count: [integer]
    }
    callback: [function]
  */
  media: function (param, callback) {
    var url = "/me/media?fields=id,caption,media_type,media_url,permalink" +
      "&access_token=" + instagram.getAccessToken();

    instagram.jsonp(url, function (res) {
      let limited = res.data.slice(0, param.count);
      callback(limited);
    });
  }
};
