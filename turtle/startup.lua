local ws ,err = http.websocket("http://localhost:8080/")

if err then
    print(err)
elseif ws then
    print(" ~ connected ~ ")
    while true do
        local message = ws.recieve()
        print(message)
    end
end
