'use client'

import {useState, useRef} from 'react'

import { useIntersection } from '@/app/components/Mixins/useIntersection'
import styles from './styles.module.scss'

export enum Theme {
  Light = 'white',
  Dark = 'black' 
}

export interface Props {
  context: string
  theme?: Theme
  className?: string
  delay?: number
  offset?: number
  animate?: boolean
}

export default function WaterMark(props: Props) {
  const [loaded, setLoaded] = useState(false)
  const context = props.context + '_water-mark'
  const clipId = context + '__clip'
  const pathId = context + '__path'
  const ref = useRef(null)
  const animate = props.animate ?? false
  const inViewport = useIntersection(ref, props.offset ?? 0)

  if (inViewport && !loaded) {
    setLoaded(true)
  }

  return (
    <div ref={ref} className={(props.className ? props.className : '') + ' ' + (loaded || props.delay === 0 ? 'opacity-1' : 'opacity-0')}>
      <svg version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="201.687px"
        height="160.252px"
        viewBox="0 0 201.687 160.252"
        enableBackground="new 0 0 201.687 160.252"
        xmlSpace="preserve"
      >
        <clipPath id={clipId}>
          <circle ref={ref} className={(loaded && animate) ? styles.circle : ''} cx="70" cy="100" r="200" />
        </clipPath>
        <path id={pathId} fillRule="evenodd" clipRule="evenodd" d="M3.655,127.167c3.92,1.257,7.853-2.177,7.15-7.317
          C5.052,109.811-5.641,124.195,3.655,127.167z M111.489,44.222c-1.262,0.146-3.688,1.373-3.125,2.931
          C109.363,46.093,110.91,46.099,111.489,44.222z M142.322,59.782c4.916-4.521,11.795-4.636,18.213-6.396
          c6.825-1.872,14.174-6.89,21.065-9.848c5.143-2.206,10.036-5.005,14.914-7.015c2.203-0.905,6.154-0.463,4.949-4.53
          c-2.858-1.467-4.903,1.408-6.945,2.582c-10.792,6.197-23.426,8.526-33.762,15.388c-6.347,2.848-13.113,4.215-19.654,6.807
          c-3.738,1.48-7.126,3.901-10.859,5.257c-5.774,2.096-11.753,3.427-16.768,5.982c-4.749,2.42-14.526,9.447-18.64,3.636
          c4.025-6.5,2.594-16.14,9.502-20.105c-2.054-0.338-1.667,1.143-3.82-0.35c-2.592,1.817-3.979,5.982-7.022,6.923
          c-1.319-1.75-5.265-2.144-6.101-4.14c5.339-4.78,10.998-13.176,11.721-21.579c-3.718,3.383-4.977,13.394-9.675,16.558
          c-0.751-0.606-1.023-1.459-2.519-1.682c-4.111,2.51-7.354,6.708-12.412,7.379c-0.539-0.987,0.342-1.489,0.762-2.376
          c-1.163-0.755-0.961,1.132-1.967,0.681c0.481-3.931-1.646-8.216-1.595-12.742c0.052-4.447,2.695-9.885-1.072-13.009
          c-4.007,2.98-0.34,9.3-1.146,14.482c-0.172,1.096-1.097,1.893-1.413,3.041c-0.804,2.933,0.181,7.351-2.792,8.715
          c-2.444-3.616-6.31-6.991-7.762-11.222c-0.527-1.538,0.067-4.236-2.026-4.58c1.38,5.795,1.84,12.065,4.019,17.449
          c-4.366,7.854-10.417,2.64-14.231-1.938c-1.467-1.763-3.224-2.952-3.992-3.9c-1.308-1.613-1.656-4.344-2.835-6.15
          c-2.052-3.148-4.644-5.515-5.353-7.83c-0.43-1.405,0.09-3.023-0.315-4.468c-0.519-1.858-2.585-3.79-3.752-6.008
          c-1.374-2.607-1.941-5.741-3.247-7.592c-1.046-1.486-2.956-2.106-4.119-3.503C17.824,9.079,15.938,2.79,11.647,0
          c-1.513,0.062-2.441,1.259-2.854,3.454c1.619,4.429,5.846,7.496,7.507,12.015c0.509,1.387-0.021,3.229,0.712,4.596
          c1.148,2.146,3.401,2.605,5.179,4.282c2.149,2.022,2.905,5.419,4.832,8.099c1.021,1.421,2.727,2.12,3.723,3.377
          c5.734,7.236,8.113,17.196,13.429,23.522c-0.594,2.471,1.276,5.2-1.096,7.51c-1.453-1.017-3.92-1.509-4.247-3.107
          c-2.149,4.608-5.591,6.707-10.049,6.827c-3.664-2.788-8.882-7.79-13.643-7.866c-1.724,3.753,2.806,4.564,5.068,5.992
          c5.564,3.51,12.136,8.9,9.249,14.758c0.615,1.116,2.044,0.193,3.565,1.142c1.091,2.417-1.598,5.962-3.205,7.273
          c-5.475,4.475-17.149-0.845-18.339,6.792c7.47,8.11,15.742-5.582,25.263,0.231c1.794,3.148,3.167,8.588-2.128,9.364
          c-0.793,2.172,2.875,2.05,2.154,4.182c0.093,1.682-1.333,0.412-1.427,1.729c0.61,0.237,1.39,0.387,0.934,1.173
          c-0.758,5.68-6.965,12.798-1.67,14.753c2.383-2.44,2.522-9.242,7.689-6.272c0.977,4.75-3.512,7.522-4.728,12.028
          c-1.466,1.754-6.607,6.047-3.584,8.459c6.452-3.959,8.054-17.346,15.966-18.472c1.813,3.25,1.608,10.66,0.833,15.119
          c-0.647,3.739-6.552,13.849-2.29,18.049c4.234,4.171,9.826-3.161,10.573-7.096c1.208-6.347-6.651-12.254-5.221-19.146
          c0.362-1.743,1.669-5.134,3.077-6.876c1.36-1.683,6.883-5.805,10.052-6.827c3.771-1.213,6.549-2.036,10.65-0.519
          c5.974,6.063,12.736,10.463,15.603,18.104c1.028,2.742,0.376,7.141,4.559,7.578c2.182-2.419-0.008-5.228-1.784-6.69
          c-1.27-4.309-2.977-8.392-5.275-12.172c0.153-1.621,0.503-3.345,1.255-5.275c1.96-1.118,3.996-2.091,5.074-4.927
          c0.85-0.441,1.543,0.886,3.169,1.016c1.084-0.464,1.5-2.225,2.868-2.138c6.549,1.063,10.892,3.851,16.91,5.854
          c5.439,1.81,7.196,6.446,11.676,8.544c4.817,2.261,6.67,4.108,10.71,4.745c2.035-1.034,2.266-3.117,1.649-5.149
          c-5.889-3.285-7-8.535-13.53-9.577c-1.487-0.236-3.194,0.617-4.863,0.188c-5.203-1.331-9.653-6.274-15.229-8.371
          c-0.008-3.194-3.008-4.852-5.212-6.914c0.668-1.243,1.597-0.98,1.286-2.646c-0.473-0.968-2.279-1.251-2.266-2.472
          c0.934-0.543,0.691-3.372,2.475-2.266c0.868-1.359-1.669-1.485-0.158-2.233c4.343-2.451,9.738,4.632,13.438,1.685
          c-0.459-5.549-11.227-1.847-11.788-6.836c1.696-0.558,4.526,1.085,5.246-1.376c-2.933-1.395-5.75,1.023-8.812,0.234
          c-1.783-0.459-3.314-2.212-5.166-2.966c-0.719-0.292-4.93,0.096-4.498-2.315c0.729,0.114,1.619,1.749,2.376,0.765
          c-1.082-0.659-2.762-1.009-2.788-2.205c2.26-2.68,5.699-3.069,9.033-3.658c11.762-7.576,24.771-12.725,37.947-17.542"/>
          <use clipPath={`url(#${clipId})`} href={'#' + pathId} fill={props.theme ? props.theme : Theme.Light} />
      </svg>
    </div>
  )
}
