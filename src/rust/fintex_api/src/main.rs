use warp::Filter;

#[tokio::main]
async fn main() {


    let hello = warp::path!("api/version" / String)
        .map(|name| format!("{'version':'0.0.1'}"));

    let hello = warp::path!("api/echo" / String)
        .map(|name| format!(" {}!", name));

    warp::serve(hello)
        .run(([127, 0, 0, 1], 3030))
        .await;
}
