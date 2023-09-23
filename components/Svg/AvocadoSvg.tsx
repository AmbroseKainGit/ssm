interface props {
    stroke?: string
    strokeWidth?: number
}
export const AvocadoSvg = ({ stroke = 'black', strokeWidth = 1 }: props) => {
    return (
        <svg width="348" height="415" viewBox="0 0 348 415" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M190.985 127.81C190.985 127.81 212.057 137.649 207.441 184.759C202.826 231.869 148.208 320.987 141.286 329.898C134.363 338.808 107.054 365.12 71.2779 360.449C35.5019 355.778 17.0761 331.553 17.0761 331.553M27.8332 224.355C19.2275 214.918 -13.9285 173.139 26.6534 128.738C72.8133 78.2308 112.588 141.076 112.588 141.076M134.016 125.866C133.938 115.568 136.054 95.1139 152.502 84.2409M152.502 84.2409C152.979 83.925 153.465 83.6188 153.968 83.322C178.207 68.8981 203.208 81.2068 212.82 89.2658C222.441 97.3344 228.21 104.733 231.671 109.098C235.132 113.462 250.131 143.162 255.519 149.527C260.897 155.892 295.901 186.453 301.67 218.277C307.439 250.111 292.83 266.66 288.597 275.571C284.363 284.482 267.829 304.007 250.131 313.339C232.434 322.681 203.59 322.681 183.975 313.339C172.759 308.008 165.81 301.145 161.915 296.245M152.502 84.2409C134.267 46.1853 147.427 1 147.427 1M145.415 35.38C145.415 35.38 165.125 13.3086 199.356 19.2524C233.588 25.1961 246.427 50.6557 246.427 50.6557C246.427 50.6557 232.998 47.6886 208.873 60.8396C184.748 73.9905 162.357 60.4184 157.777 57.8725C153.205 55.3265 146.3 45.9562 148.408 42.367C150.516 38.7778 162.435 31.1399 185.511 33.6858C208.587 36.2318 224.358 45.9945 224.358 45.9945M165.506 37.495C165.506 37.495 169.74 45.1329 182.813 48.9518C195.886 52.7708 204.353 51.9189 204.353 51.9189M185.511 33.6766C185.511 33.6766 195.895 25.1868 204.362 26.0386M185.121 121.952C202.757 136.041 200.51 159.3 196.658 174.575C192.807 189.851 168.196 242.904 161.655 256.477C155.114 270.058 125.115 315.885 117.42 323.533C109.726 331.171 74.7218 370.642 30.106 342.206C-14.5098 313.77 4.73152 263.693 7.42078 254.782C10.11 245.872 35.1116 214.468 46.2677 202.16C57.4238 189.851 102.812 148.685 116.275 138.08C129.739 127.475 162.817 104.121 185.121 121.952ZM110.116 211.07C120.5 219.981 139.733 239.507 120.118 273.877C100.504 308.247 70.1154 292.129 62.0389 286.607C53.9624 281.084 27.0351 253.079 62.0389 217.856C83.1453 196.618 110.116 211.07 110.116 211.07Z"
                stroke={`${stroke}`} strokeWidth={`${strokeWidth}`} strokeMiterlimit="10" />
        </svg>
    )
}
