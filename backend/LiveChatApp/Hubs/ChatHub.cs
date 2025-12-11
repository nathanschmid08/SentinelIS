using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace LiveChatApp.Hubs
{
    // Einfache Chat-Hub-Klasse
    public class ChatHub : Hub
    {
        // Methode, die Clients aufruft, wenn jemand eine Nachricht sendet
        public async Task SendMessage(string user, string message)
        {
            // Sendet die Nachricht an alle verbundenen Clients und ruft die Client-Methode "ReceiveMessage" auf
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }

        // Optional: override bei Connect/Disconnect um Logs oder Presence zu verwalten
        public override async Task OnConnectedAsync()
        {
            await base.OnConnectedAsync();
        }

        public override async Task OnDisconnectedAsync(System.Exception? exception)
        {
            await base.OnDisconnectedAsync(exception);
        }
    }
}
