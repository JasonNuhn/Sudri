import React from 'react';
// import { render } from 'react-dom';

import { Tabs, TabLink, TabContent } from '../node_modules/react-tabs-redux';

import './QuestionHome.css';

// const styles = {
//     tabs: {
//         width: '600px',
//         display: 'inline-block',
//         // marginRight: '30px',
//         verticalAlign: 'top'
//     },
//     links: {
//         margin: 0,
//         padding: 0
//     },
//     tabLink: {
//         height: '30px',
//         lineHeight: '30px',
//         padding: '0 15px',
//         cursor: 'pointer',
//         borderBottom: '2px solid transparent',
//         display: 'inline-block'
//     },
//     activeLinkStyle: {
//         borderBottom: '2px solid #333'
//     },
//     visibleTabStyle: {
//         display: 'inline-block'
//     },
//     content: {
//         padding: '0 15px'
//     }
// };

const QuestionHome = (props) => {
    return (
        <div className="QuestionHome">
        <Tabs className="tabs tabs-1">
            <div className="tab-links">
                <TabLink to="tab1">Recent</TabLink>
                {/* <TabLink to="tab2">Current</TabLink>
                <TabLink to="tab3">Hot</TabLink> */}
                {/* <TabLink to="tab4">Week</TabLink>
                <TabLink to="tab5">Month</TabLink> */}
            </div>

            <div className="content">
                <TabContent for="tab1">
                    <p>
                        Lorem ipsum dolor sit amet, in vel malorum adipiscing. Duis deleniti ei cum, amet graece nec an.
                        Eu vix sumo atqui apeirian, nullam integre accusamus his at, animal feugiat in sed.
                    </p>
                    <p>
                        Pro vitae percipit no. Per ignota audire no. Ex hinc mutat delicata sit, sit eu erant tempor vivendo. Ad modus nusquam recusabo sit. Per ne deserunt periculis, ad sea saepe perfecto expetendis, est nonumy contentiones voluptatibus cu.
                    </p>
                </TabContent>
                {/* <TabContent for="tab2">
                <p>
                        Lorem ipsum dolor sit amet, in vel malorum adipiscing. Duis deleniti ei cum, amet graece nec an.
                        Eu vix sumo atqui apeirian, nullam integre accusamus his at, animal feugiat in sed.
                    </p>
                    <p>
                        Pro vitae percipit no. Per ignota audire no. Ex hinc mutat delicata sit, sit eu erant tempor vivendo. Ad modus nusquam recusabo sit. Per ne deserunt periculis, ad sea saepe perfecto expetendis, est nonumy contentiones voluptatibus cu.
                    </p>
                </TabContent> */}
                {/* <TabContent for="tab3">
                <p>
                        Lorem ipsum dolor sit amet, in vel malorum adipiscing. Duis deleniti ei cum, amet graece nec an.
                        Eu vix sumo atqui apeirian, nullam integre accusamus his at, animal feugiat in sed.
                    </p>
                    <p>
                        Pro vitae percipit no. Per ignota audire no. Ex hinc mutat delicata sit, sit eu erant tempor vivendo. Ad modus nusquam recusabo sit. Per ne deserunt periculis, ad sea saepe perfecto expetendis, est nonumy contentiones voluptatibus cu.
                    </p>
                </TabContent> */}
                {/* <TabContent for="tab4">
                <p>
                        Lorem ipsum dolor sit amet, in vel malorum adipiscing. Duis deleniti ei cum, amet graece nec an.
                        Eu vix sumo atqui apeirian, nullam integre accusamus his at, animal feugiat in sed.
                    </p>
                    <p>
                        Pro vitae percipit no. Per ignota audire no. Ex hinc mutat delicata sit, sit eu erant tempor vivendo. Ad modus nusquam recusabo sit. Per ne deserunt periculis, ad sea saepe perfecto expetendis, est nonumy contentiones voluptatibus cu.
                    </p>
                </TabContent>
                <TabContent for="tab5">
                <p>
                        Lorem ipsum dolor sit amet, in vel malorum adipiscing. Duis deleniti ei cum, amet graece nec an.
                        Eu vix sumo atqui apeirian, nullam integre accusamus his at, animal feugiat in sed.
                    </p>
                    <p>
                        Pro vitae percipit no. Per ignota audire no. Ex hinc mutat delicata sit, sit eu erant tempor vivendo. Ad modus nusquam recusabo sit. Per ne deserunt periculis, ad sea saepe perfecto expetendis, est nonumy contentiones voluptatibus cu.
                    </p>
                </TabContent> */}
            </div>
        </Tabs>
        </div>

        
    );
}


export default QuestionHome;