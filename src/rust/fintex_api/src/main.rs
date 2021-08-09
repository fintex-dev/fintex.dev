use warp::Filter;


#[tokio::main]
async fn main() {
    // GET /hello/warp => 200 OK with body "Hello, warp!"
    let api = warp::path!("forward" / String / String).map(|url, time| format!("forwarding to, {} {}", url, time))

    .or(warp::path!("version").map(|| format!("{{'version':'0.0.1'}}")));


    warp::serve(api).run(([127, 0, 0, 1], 3030)).await;
}