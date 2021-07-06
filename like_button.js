const LikeButton = React.createElement(
    'button',
    { 
        onClick: () => this.setState({ liked: true }) ,
        style: {
            "backgroundColor": "#1890ff",
            "height": "32px",
            "padding": "4px 15px",
            "fontSize": "14px",
            "borderRadius": "2px",
            "lineHeight": "24px",
            "border": "1px solid transparent",
        },
        "className": "demo",
    },
    React.createElement(
        "span",
        null, "Like"
    )
)

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(LikeButton, domContainer);


