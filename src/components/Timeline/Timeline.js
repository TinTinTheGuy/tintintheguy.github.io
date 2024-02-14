import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { School, Work, Star } from '@mui/icons-material';

const Timeline = () => {
  return (
    <div style={{ position: 'absolute',  top: '1200px', left: '0', width: '100%', height: '100%', overflow: 'auto', background: 'transparent' }}>
      <VerticalTimeline>
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgba(33, 150, 243, 0.7)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgba(33, 150, 243, 0.7)' }}
          date="2011 - present"
          iconStyle={{ background: 'rgba(33, 150, 243, 0.7)', color: '#fff' }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: 'rgba(33, 150, 243, 0.7)', color: '#fff' }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
        </VerticalTimelineElement> */}

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: 'rgba(33, 150, 243, 0.7)', color: '#fff' }}

          date="Expected Graduation 2024"
          iconStyle={{ background: 'rgba(233, 30, 99, 0.7)', color: '#fff' }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">Oregon State University</h3>
          <h4 className="vertical-timeline-element-subtitle">Computer Science (B.S)</h4>
          <p>Web Development and Mobile Focus</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: 'rgba(33, 150, 243, 0.7)', color: '#fff' }}
          date="Graduated 2020"
          iconStyle={{ background: 'rgba(233, 30, 99, 0.7)', color: '#fff' }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">Tacoma Community College</h3>
          <h4 className="vertical-timeline-element-subtitle">Associate in Science</h4>
          <p>General Computer Science</p>
        </VerticalTimelineElement>

        {/* <VerticalTimelineElement
          className="vertical-timeline-element--star"
          iconStyle={{ background: 'rgba(16, 204, 82, 0.7)', color: '#fff' }}
          icon={<Star />}
        /> */}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
