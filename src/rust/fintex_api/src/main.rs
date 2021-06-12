use warp::Filter;

#[tokio::main]
async fn main() {
    // GET /hello/warp => 200 OK with body "Hello, warp!"
    let hello = warp::path!("api" / String)
        .map(|name| format!("version 0.0.1 {}!", name));


    warp::serve(hello)
        .run(([127, 0, 0, 1], 3030))
        .await;
}