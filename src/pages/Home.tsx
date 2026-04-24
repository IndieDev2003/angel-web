import video from '../assets/download.mp4'

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <video src={video} autoPlay muted loop className="h-full w-full object-cover opacity-65 absolute z-10"></video>
    
      <p className='z-20'>
        In a world where everything feels loud and uncertain, <br /> you arrived
        quietly—almost like a pause I didn’t know I needed. <br /> At first,
        there was distance, a little fear, <br /> two strangers standing on
        unfamiliar ground. <br />
        But somewhere between late conversations and honest words, <br /> that
        distance faded… and something real took its place. <br /> You
        listened—not to reply, but to understand. <br /> You saw the chaos, the
        mistakes, <br /> the parts I don’t show easily, and instead of walking
        away, you stayed. <br /> We spoke about fears, about faith, <br /> about
        the weight of choices— and somehow, <br /> in those conversations,{" "}
        <br /> you became a mirror I never had, <br /> reflecting not just who I
        am, but who I could be. <br /> You didn’t come into my life to fix it,{" "}
        <br /> but your presence made me want to fix it myself. <br /> And maybe
        that’s what makes you rare— not an escape from reality, <br /> but a
        reason to face it with a little more strength, <br /> a little more
        clarity. <br /> This page isn’t about perfection, it’s about gratitude—
        for the conversations, <br /> the honesty, and for you… being exactly
        who you are.
      </p>
    </div>
  );
}

export default Home;

