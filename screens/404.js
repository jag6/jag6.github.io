import topHeader from "../components/topHeader.js";

const Error404 = {
    render:() => {
        return `
            ${topHeader.render('Page Not Found!')}
        `;
    },
};

export default Error404;