const miguelallopes = "miguelallopes-v1.0.0"

const assets = [

]

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(miguelallopes).then(cache => {
      cache.addAll(assets)
    })
  )
})
