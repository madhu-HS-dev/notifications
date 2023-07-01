const Notification = (props) => {
  //  Write your code here.
  const { image, content, className } = props;
  return (
    <div className={`notification-container ${className}`}>
      <img src={image} className="logo" />
      <p className="notification">{content}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div>
    <h1 className="main-heading">Notifications</h1>
    <div>
      <Notification
        image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        content="Information Message"
        className="information-container"
      />
    </div>
    <div>
      <Notification
        image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        content="Success Message"
        className="success-container"
      />
    </div>
    <div>
      <Notification
        image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        content="Warning Message"
        className="warning-container"
      />
    </div>
    <div>
      <Notification
        image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        content="Error Message"
        className="error-container"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
