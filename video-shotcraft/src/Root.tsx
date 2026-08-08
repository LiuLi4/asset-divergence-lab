import React from 'react';
import {Composition} from 'remotion';
import {BeijingHomebuyingPromo, type PromoProps} from './Promo';

export const VideoRoot: React.FC = () => (
  <Composition
    id="BeijingHomebuyingDouyin"
    component={BeijingHomebuyingPromo}
    durationInFrames={1260}
    fps={30}
    width={1080}
    height={1920}
    defaultProps={{bgm: true}}
  />
);
