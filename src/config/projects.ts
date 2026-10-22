import { assetUrl } from '../lib/assetUrl'
import type { Project } from '../types'

/**
 * Edit repositoryUrl for Project 3 when the public URL is available.
 * Private projects must not expose repository URLs.
 */
export const projects: Project[] = [
  {
    id: 'gr-bb60c',
    title: 'Signal Hound BB60C Sweep Integration',
    description:
      'A GNU Radio out-of-tree C++ component for integrating Signal Hound BB60C spectrum sweep data into a GNU Radio processing workflow.',
    repositoryUrl: 'https://github.com/mohammadHaghpanah/gr-bb60c',
    isPrivate: false,
    technologies: ['C++', 'GNU Radio', 'BB60C', 'SDR'],
    highlights: [
      { text: 'GNU Radio OOT development in C++' },
      { text: 'BB60C sweep-mode integration' },
      { text: 'Sweep data handling and circular buffering' },
      { text: 'Metadata and sweep-size handling' },
      { text: 'Real-time visualization workflow' },
    ],
    notes: [
      'The BB60C hardware performs most sweep calculations; this module focuses on integration into the GNU Radio workflow.',
    ],
    screenshotSrc: assetUrl('assets/bb60c-sweep-gui.png'),
    screenshotAlt: 'BB60C sweep example GUI from the gr-bb60c repository',
  },
  {
    id: 'gr-sweep-usrp',
    title: 'Real-Time USRP Spectrum Sweep',
    description:
      'A C++ GNU Radio out-of-tree component for spectrum sweeping with supported USRP devices.',
    repositoryUrl: 'https://github.com/mohammadHaghpanah/gr_sweep_usrp',
    isPrivate: false,
    technologies: ['C++', 'GNU Radio', 'USRP', 'UHD', 'FFT'],
    highlights: [
      {
        text: 'USRP B200, B200mini, X310, and N200 configurations, subject to compatibility',
      },
      { text: 'IQ processing and moving-average stages' },
      { text: 'Overlap processing' },
      { text: 'FFT-based spectrum calculation' },
      { text: 'Spectrum smoothing and visualization' },
    ],
    pipeline: [
      { label: 'USRP IQ Samples' },
      { label: 'Moving Average' },
      { label: 'Overlap Processing' },
      { label: 'FFT' },
      { label: 'Spectrum Smoothing' },
      { label: 'Visualization' },
    ],
    screenshotSrc: assetUrl('assets/usrp-spectrum-wide.png'),
    screenshotAlt: 'Real-time USRP wideband spectrum display from gr_sweep_usrp',
  },
  {
    id: 'qt-signal-analysis',
    title: 'Qt Signal Analysis and Channel Monitoring',
    description:
      'A Qt/C++ application for time-domain and frequency-domain visualization, waterfall monitoring, channel extraction, and channel logging.',
    /** Set the public repository URL when available. */
    repositoryUrl: '',
    isPrivate: false,
    technologies: ['C++', 'Qt', 'Signal Analysis'],
    highlights: [
      { text: 'Time-domain and frequency-domain visualization' },
      { text: 'Waterfall monitoring' },
      { text: 'Channel extraction' },
      { text: 'Channel logging' },
    ],
    screenshotSrc: null,
    screenshotAlt: '',
  },
  {
    id: 'usrp-dvb-s2',
    title: 'Advanced USRP SDR and DVB-S2 Processing Application',
    description:
      'A Qt/C++ SDR application integrating receiver and transmitter workflows, real-time signal visualization, channel analysis, and DVB-S2 detection and decoding capabilities.',
    repositoryUrl: '',
    isPrivate: true,
    visibilityLabel: 'Private Project — Technical Overview',
    technologies: ['C++', 'Qt', 'USRP', 'DVB-S2', 'SDR'],
    highlights: [
      { text: 'Online and offline processing' },
      { text: 'USRP-based receiving and transmitting' },
      { text: 'Single-shot and sweep reception' },
      { text: 'Time, frequency, and waterfall visualization' },
      { text: 'Max-hold, min-hold, averaging, and peak markers' },
      { text: 'Channel selection and filtering' },
      { text: 'DVB-S2 signal detection and physical-layer analysis' },
      { text: 'Supported ACM and CCM decoding workflows' },
    ],
    notes: [
      'Video, audio, or data output is available only where verified in the specific deployment.',
      'This overview does not claim complete DVB-S2 compliance or commercial deployment.',
    ],
    pipeline: [
      { label: 'Wideband Spectrum' },
      { label: 'Channel Detection' },
      { label: 'Channel Selection' },
      { label: 'Filtering' },
      { label: 'Signal Analysis' },
      { label: 'DVB-S2 Detection' },
      { label: 'Frame Decoding' },
    ],
    technicalTerms: [
      'Symbol-rate estimation',
      'Roll-off estimation',
      'Gardner timing recovery',
      'Carrier recovery',
      'SOF correlation',
      'PLSCODE detection',
      'Constellation analysis',
    ],
    contactForDetails: true,
    screenshotSrc: null,
    screenshotAlt: '',
  },
]
