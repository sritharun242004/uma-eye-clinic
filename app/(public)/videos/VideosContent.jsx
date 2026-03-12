'use client'

import { useState } from 'react'
import { Play, Video, Clock, X, ExternalLink } from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { IMAGES } from '@/lib/images'

const YOUTUBE_CHANNEL = 'https://www.youtube.com/@umaeyeclinic7236/videos'
const YOUTUBE_CHANNEL_SEARCH = 'https://www.youtube.com/@umaeyeclinic7236/search?query='

const categories = [
  { id: 'all', label: 'All Videos' },
  { id: 'smile-pro', label: 'SMILE PRO' },
  { id: 'cataract', label: 'Cataract' },
  { id: 'lasik', label: 'LASIK' },
  { id: 'presbyond', label: 'Presbyond' },
  { id: 'patient-stories', label: 'Patient Stories' },
  { id: 'educational', label: 'Educational' }
]

const videos = [
  // Videos with known YouTube IDs (from channel RSS feed + search)
  { id: 1, ytId: 'lvYxlDD8yg8', title: 'What Actually Happens During SMILE Pro Laser Vision Correction', category: 'smile-pro', description: 'See what actually happens during a SMILE Pro laser vision correction procedure at Uma Eye Clinic.' },
  { id: 2, ytId: 'X4P8tY76Sdk', title: 'Modern Cataract Surgery in 3D', category: 'cataract', description: 'Experience modern cataract surgery in stunning 3D visualization at Uma Eye Clinic Chennai.' },
  { id: 3, ytId: 'LhwwAWC09VI', title: 'Glasses or LASIK? Which Option Should You Go For?', category: 'lasik', description: 'Dr. Aadithreya Varman helps you decide between glasses and LASIK surgery.' },
  { id: 4, ytId: 'JSo5apXWeqQ', title: 'Eye Test You Can Do At Home', category: 'educational', description: 'Simple eye tests you can perform at home to check your vision health.' },
  { id: 5, ytId: 'H7yiwL1Q5LM', title: 'Eye Floaters: Normal or Serious?', category: 'educational', description: 'Dr. Aadithreya Varman explains when eye floaters are normal and when they need attention.' },
  { id: 6, ytId: 'rQ2vvXA6XR8', title: 'Glare & Starbursts While Driving At Night?', category: 'educational', description: 'Understanding and treating glare and starbursts that affect night driving.' },
  { id: 7, ytId: '4SJVOZ8MwcQ', title: 'Triphala For Eyes: Helpful Or Harmful?', category: 'educational', description: 'Dr. Aadithreya Varman examines whether Triphala is beneficial or harmful for eye health.' },
  { id: 8, ytId: 'PNMtjL7XtQM', title: 'Ozempic for Weight? Know the Eye Risk!', category: 'educational', description: 'Important information about the eye health risks associated with Ozempic use.' },
  { id: 9, ytId: 'tKn3EpfCxVE', title: 'The Real Expiry Date Of Eye Drops', category: 'educational', description: 'Learn about the actual shelf life and proper usage of eye drops.' },
  { id: 10, ytId: 'l5g_dtbaqqM', title: 'Can One Drop Really Reverse Aging Eyes?', category: 'educational', description: 'The truth about eye drops claiming to reverse presbyopia and aging eyes.' },
  { id: 11, ytId: 'biUo3UrqNv0', title: 'Think You\'ve Got Sharp Eyes?', category: 'educational', description: 'Put your visual acuity to the test with Dr. Aadithreya Varman.' },
  { id: 12, ytId: 'Gl9cXDmkkOI', title: 'Your Eyes Can Reveal More Than Just Your Vision', category: 'educational', description: 'Discover what your eyes can tell about your overall health.' },
  { id: 13, ytId: '6aPPGJfOiK4', title: 'Would You Let a Leech Near Your Eye?', category: 'educational', description: 'Exploring unconventional eye treatments and the science behind them.' },
  { id: 14, ytId: 'rtS_J-f6gXQ', title: 'Would You Risk Your Eye Health for Long Lashes?', category: 'educational', description: 'The hidden dangers of eyelash extensions and cosmetic procedures near the eyes.' },
  { id: 15, ytId: '6Hr5kuaXXEM', title: 'Blue & Black or White & Gold?', category: 'educational', description: 'The science behind color perception and how your eyes interpret colors.' },

  // Videos with YouTube IDs from @umaeyeclinic7236 (play in modal)
  { id: 16, ytId: 'MRp03a1suzM', title: 'SMILE Pro Laser for Glass-Free Vision', category: 'smile-pro', description: 'Patient shares their journey from relying on glasses to SMILE Pro for improved vision. SMILE Pro most advanced laser correction for specs removal.', thumb: '/images/media/thumb/smile-pro-8.webp' },
  { id: 17, title: 'Advanced AI Laser Cataract Surgery', category: 'cataract', description: 'Explore the intersection of AI and medical precision in Advanced AI Laser Cataract Surgery with Dr. Aadithreya Varman.', thumb: '/images/media/thumb/advances-ai.webp' },
  { id: 18, ytId: '-5ZGvb9zrpU', title: '1000 SMILE PRO Laser Procedures Milestone', category: 'smile-pro', description: 'Celebrating 1000 completed SMILE PRO procedures at Uma Eye Clinic. 10 things to know about SMILE PRO laser vision correction.', thumb: '/images/media/thumb/1000-smile.webp' },
  { id: 19, ytId: 'Sgc9oXZNV8k', title: 'LASIK For Age 40 and Above - Presbyond', category: 'presbyond', description: 'Designed for those aged 40 and above, achieving clear glass-free vision without reading glasses.', thumb: '/images/media/thumb/presbyond.webp' },
  { id: 20, title: '10 Facts About Cataract', category: 'cataract', description: 'Explores 10 essential facts about cataracts and surgical procedures.', thumb: '/images/media/thumb/10-facts-about-cataract.webp' },
  { id: 21, title: 'Transforming Lives Through Free Eye Camps', category: 'patient-stories', description: 'Witness our dedicated team bringing the gift of sight to underserved communities.', thumb: '/images/media/thumb/transforming-lives.webp' },
  { id: 22, ytId: 'B72nfhCHGvs', title: 'Actress Farina Azad - SMILE PRO Treatment', category: 'patient-stories', description: 'Celebrity testimonial highlighting minimally invasive SMILE PRO with quick recovery. Actress Pavithra Janani at Uma Eye Clinic.', thumb: '/images/media/thumb/farina-azad.webp' },
  { id: 23, title: 'Premium Cataract Surgery & Laser Lens Replacement', category: 'cataract', description: 'Dr. Aadithreya Varman explains premium cataract surgery options.', thumb: '/images/media/thumb/premium.webp' },
  { id: 24, ytId: 'HrsFo9-R_fw', title: 'SMILE Pro Live Procedure Demonstration', category: 'smile-pro', description: 'Live procedure at Madras City Ophthalmic Association - painless, just a few minutes.', thumb: '/images/media/thumb/live-procedure.webp' },
  { id: 25, title: 'The Best Option for Dry Eyes - LipiFlow', category: 'educational', description: 'Computer Vision Syndrome and the blockage of glands that hydrate the eye surface.', thumb: '/images/media/thumb/best-option.webp' },
  { id: 26, title: 'Choosing the Correct Lens for Cataract Surgery', category: 'cataract', description: 'Expert guidance on intraocular lens selection by Dr. Aadithreya Varman.', thumb: '/images/media/thumb/correct-lens.webp' },
  { id: 27, ytId: 'YZDuKsjEEWI', title: 'SMILE vs LASIK: Which Is Right For You?', category: 'lasik', description: 'Major differences explained to help patients choose the right procedure. Blade vs. Bladeless LASIK | Dr ArulMozhi Varman.', thumb: '/images/media/thumb/smile-vs-lasik.webp' },
  { id: 28, title: 'Robotic Surgery at Uma Eye Clinic', category: 'educational', description: 'Advanced robotic surgery technology for precision eye care.', thumb: '/images/media/thumb/robotic.webp' },
  { id: 29, ytId: 'Sgc9oXZNV8k', title: 'Glass Free Reading After Presbyond', category: 'presbyond', description: 'Freedom from reading glasses with Presbyond laser treatment.', thumb: '/images/media/thumb/glass-free-reading.webp' },

  // Instagram Reels
  { id: 30, instagramReelId: 'DVVuiHQEyPj', title: 'SMILE Pro – Uma Eye Clinic', category: 'smile-pro', description: 'SMILE Pro laser vision correction at Uma Eye Clinic.', thumb: '/images/media/thumb/smile-pro-8.webp' },
  { id: 31, instagramReelId: 'DULIvZck_dN', title: 'SMILE Pro – Patient Experience', category: 'smile-pro', description: 'Patient experience with SMILE Pro procedure.', thumb: '/images/media/thumb/smile-pro-8.webp' },
  { id: 32, instagramReelId: 'DVLaylYk5lS', title: 'Presbyond – Glass-Free Vision', category: 'presbyond', description: 'Presbyond treatment for clear vision after 40.', thumb: '/images/media/thumb/presbyond.webp' },
  { id: 33, instagramReelId: 'DUA24VEk0ot', title: 'Cataract Surgery – Uma Eye Clinic', category: 'cataract', description: 'Cataract surgery and lens replacement at Uma Eye Clinic.', thumb: '/images/media/thumb/premium.webp' },
  { id: 34, instagramReelId: 'DUTAa8UE_Rc', title: 'Presbyond – Laser Blended Vision', category: 'presbyond', description: 'Presbyond laser blended vision for reading and distance.', thumb: '/images/media/thumb/presbyond.webp' },
]

const categoryLabels = {
  'smile-pro': 'SMILE PRO',
  'cataract': 'Cataract',
  'lasik': 'LASIK',
  'presbyond': 'Presbyond',
  'patient-stories': 'Patient Stories',
  'educational': 'Educational'
}

const categoryTagClasses = {
  'smile-pro': 'tag-treatment',
  'cataract': 'tag-eye-health',
  'lasik': 'tag-treatment-guides',
  'presbyond': 'tag-technology',
  'patient-stories': 'tag-patient-stories',
  'educational': 'tag-wellness'
}

function getThumb(video) {
  if (video.ytId) return `https://img.youtube.com/vi/${video.ytId}/hqdefault.jpg`
  if (video.instagramReelId && video.thumb) return video.thumb
  if (video.instagramReelId) return '/images/media/thumb/presbyond.webp' // fallback for Instagram
  return video.thumb
}

export default function VideosContent() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [playingVideo, setPlayingVideo] = useState(null)

  const filteredVideos = activeFilter === 'all'
    ? videos
    : videos.filter(v => v.category === activeFilter)

  const handleVideoClick = (video) => {
    if (video.ytId || video.instagramReelId) {
      setPlayingVideo(video)
      return
    }
    // Some entries are curated captions without a mapped YouTube ID yet.
    // Search within the clinic’s channel so users land on the exact video.
    const q = encodeURIComponent(video.title || 'Uma Eye Clinic')
    window.open(`${YOUTUBE_CHANNEL_SEARCH}${q}`, '_blank', 'noopener')
  }

  const closePlayer = () => setPlayingVideo(null)

  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ position: 'relative' }}>
        <img src={IMAGES.videoBanner} alt="Video Gallery" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
      </section>

      {/* Category Filter */}
      <section className="blog-categories">
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-pill${activeFilter === cat.id ? ' active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Video Grid */}
      <AnimateOnScroll>
        <section className="blog-grid-section">
          <div className="blog-grid">
            {filteredVideos.map(video => (
              <div
                key={video.id}
                className="blog-card-full"
                style={{ cursor: 'pointer' }}
                onClick={() => handleVideoClick(video)}
              >
                <div className="blog-card-full-image" style={{ position: 'relative' }}>
                  <img src={getThumb(video)} alt={video.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div className="video-play-overlay">
                    <div className="video-play-button">
                      <Play size={28} fill="white" color="white" />
                    </div>
                  </div>
                  <span className={`blog-card-full-tag ${categoryTagClasses[video.category]}`}>
                    {categoryLabels[video.category]}
                  </span>
                </div>
                <div className="blog-card-full-body">
                  <h3 className="blog-card-full-title">{video.title}</h3>
                  <p className="blog-card-full-excerpt">{video.description}</p>
                  <div className="blog-card-full-meta">
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Video size={12} className="meta-icon" />
                      Uma Eye Clinic
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      {(video.ytId || video.instagramReelId) ? <Play size={12} className="meta-icon" /> : <ExternalLink size={12} className="meta-icon" />}
                      {(video.ytId || video.instagramReelId) ? 'Watch Now' : 'Find on YouTube'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </AnimateOnScroll>

      {/* View All on YouTube */}
      <section style={{ textAlign: 'center', padding: '0 24px 64px' }}>
        <a
          href={YOUTUBE_CHANNEL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
        >
          <ExternalLink size={16} />
          View All Videos on YouTube
        </a>
      </section>

      {/* Video Player Modal */}
      {playingVideo && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.85)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '24px',
          }}
          onClick={closePlayer}
        >
          <div
            style={{
              position: 'relative', width: '100%', maxWidth: 960,
              background: '#000', borderRadius: 12, overflow: 'hidden',
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={closePlayer}
              style={{
                position: 'absolute', top: -40, right: 0, zIndex: 10,
                background: 'none', border: 'none', color: '#fff',
                cursor: 'pointer', padding: 4,
              }}
              aria-label="Close video"
            >
              <X size={28} />
            </button>
            {playingVideo.ytId ? (
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  src={`https://www.youtube.com/embed/${playingVideo.ytId}?autoplay=1&rel=0`}
                  title={playingVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute', top: 0, left: 0,
                    width: '100%', height: '100%', border: 'none',
                  }}
                />
              </div>
            ) : playingVideo.instagramReelId ? (
              <div style={{ padding: '20px 20px 0', minHeight: 560 }}>
                <iframe
                  src={`https://www.instagram.com/p/${playingVideo.instagramReelId}/embed/captioned/`}
                  title={playingVideo.title}
                  style={{
                    width: '100%', maxWidth: 540, height: 960, border: 'none',
                    overflow: 'hidden', margin: '0 auto', display: 'block',
                  }}
                />
              </div>
            ) : null}
            <div style={{ padding: '16px 20px', color: '#fff' }}>
              <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>{playingVideo.title}</h3>
              <p style={{ margin: '8px 0 0', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>{playingVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
