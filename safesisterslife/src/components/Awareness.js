import React from 'react';
import '../styles/Awareness.css';
import awareImg from '../image1/aware.avif';
import senseImg from '../image1/sense.avif';
import accessImg from '../image1/access.jpg';
import safetyImg from '../image1/night.avif';
import locImg from '../image1/loc2.avif';
import stalkImg from '../image1/stalk.jpg';
import cstalkImg from '../image1/cstalk2.avif';



const Awareness = () => {
  return (
    <section className="awareness-section">
      {/* General Safety Advice */}
      <div className="awareness-item">
        <div className="awareness-content">
          <h2>General Safety Advice: Practice Awareness</h2>
          <p>This is your first line of defense. Most people think of kicks to the groin and blocking punches when they hear the term “self-defense.” However, true self-defense begins long before any actual physical contact. The first, and probably most important, component in self-defense is awareness: awareness of yourself, your surroundings, and your potential attacker’s likely strategies.</p>
        </div>
        <div className="awareness-image">
          <img src={awareImg} alt="Practice Awareness" />
        </div>
      </div>

      {/* Sixth Sense */}
      <div className="awareness-item reverse">
        <div className="awareness-content">
          <h2>Use Your Sixth Sense</h2>
          <p>Similar to being aware, your “Sixth sense” or “Gut instinct” is a powerful subconscious insight into situations and people. All of us, especially women, have this gift, but very few of us pay attention to it. Learn to trust this power and use it to your full advantage. Avoid a person or a situation that does not “feel” safe — you’re probably right.</p>
        </div>
        <div className="awareness-image">
          <img src={senseImg} alt="Use Your Sixth Sense" />
        </div>
      </div>

      {/* Accessories */}
      <div className="awareness-item">
        <div className="awareness-content">
          <h2>Accessories</h2>
          <p>If you want to take extra precautions, these accessories can be life savers. If you don’t have one, get a portable battery charger to charge your phone in case it dies. A personal alarm, usually a keychain, allows you to alert people nearby. If your phone doesn’t have a flashlight, get a keychain flashlight or similar device.</p>
        </div>
        <div className="awareness-image">
          <img src={accessImg} alt="Accessories" />
        </div>
      </div>

      {/* Safety on a Night Out */}
      <div className="awareness-item reverse">
        <div className="awareness-content">
          <h2>Safety on a Night Out: Have a Plan</h2>
          <p>When going out alone or with friends, have a plan in place. Know your surroundings and let someone outside your group know your whereabouts. This adds an extra level of precaution.</p>
        </div>
        <div className="awareness-image">
          <img src={safetyImg} alt="Safety on a Night Out" />
        </div>
      </div>

      {/* Ping Your Location */}
      <div className="awareness-item">
        <div className="awareness-content">
          <h2>Ping Your Location</h2>
          <p>Smartphones can be lifesavers. Most have emergency features that allow you to ping your location to your contacts. This feature is easy to set up and will draw attention if you are in an unsafe situation.</p>
        </div>
        <div className="awareness-image">
          <img src={locImg} alt="Ping Your Location" />
        </div>
      </div>

      {/* Stalking Advice */}
      <div className="awareness-item reverse">
        <div className="awareness-content">
          <h2>Stalking Advice</h2>
          <p>Stalking is on the rise. Here are some tips to help you avoid or deal with a stalker:</p>
          <ul>
            <li>Do not engage with your stalker in any way.</li>
            <li>Inform trusted people about the harassment. They can help by collecting evidence or by putting protective measures in place.</li>
            <li>Be aware of how much personal information is in the public domain and take steps to protect it.</li>
            <li>Above all, trust your instincts.</li>
          </ul>
        </div>
        <div className="awareness-image">
          <img src={stalkImg} alt="Stalking Advice" />
        </div>
      </div>

      {/* Cyber Stalking */}
      <div className="awareness-item">
        <div className="awareness-content">
          <h2>Cyber Stalking</h2>
          <p>With the digital world, it's important to stay safe online:</p>
          <ul>
            <li>Limit information you share on social networking sites.</li>
            <li>Keep your social media accounts private.</li>
            <li>Ensure your anti-virus software is up-to-date.</li>
            <li>Report stalking activities to website administrators.</li>
            <li>Google yourself to check your digital footprint.</li>
          </ul>
        </div>
        <div className="awareness-image">
          <img src={cstalkImg} alt="Cyber Stalking" />
        </div>
      </div>
    </section>
  );
};

export default Awareness;
