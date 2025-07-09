import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Send, Paperclip, MoreVertical, Phone, Video, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const conversations = [
    {
      id: 1,
      name: "Alex Thompson",
      role: "Client",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      lastMessage: "Thanks for the update on the project. Looking great so far!",
      lastMessageTime: "2m ago",
      unreadCount: 2,
      online: true,
      project: "E-commerce Platform"
    },
    {
      id: 2,
      name: "Maria Garcia",
      role: "Client", 
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c",
      lastMessage: "Can we schedule a call to discuss the next phase?",
      lastMessageTime: "1h ago",
      unreadCount: 0,
      online: false,
      project: "Mobile App Design"
    },
    {
      id: 3,
      name: "John Smith",
      role: "Freelancer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      lastMessage: "I've completed the wireframes for review",
      lastMessageTime: "3h ago",
      unreadCount: 1,
      online: true,
      project: "Website Redesign"
    },
    {
      id: 4,
      name: "Emily Chen",
      role: "Client",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      lastMessage: "Perfect! The designs look exactly what we wanted.",
      lastMessageTime: "1d ago",
      unreadCount: 0,
      online: false,
      project: "Brand Identity"
    }
  ];

  const messages = [
    {
      id: 1,
      senderId: 2,
      senderName: "Alex Thompson",
      content: "Hi Sarah! I've reviewed the initial mockups and they look fantastic. The user flow is intuitive and the design is exactly what we were hoping for.",
      timestamp: "10:30 AM",
      type: "text"
    },
    {
      id: 2,
      senderId: 1,
      senderName: "You",
      content: "Thank you so much! I'm glad you like the direction. I've incorporated all the feedback from our last call.",
      timestamp: "10:32 AM", 
      type: "text"
    },
    {
      id: 3,
      senderId: 2,
      senderName: "Alex Thompson",
      content: "The color scheme really makes the product features pop. How long do you think it will take to implement the responsive breakpoints?",
      timestamp: "10:35 AM",
      type: "text"
    },
    {
      id: 4,
      senderId: 1,
      senderName: "You",
      content: "I estimate about 2-3 days for the responsive implementation. I'll make sure it looks great on all device sizes.",
      timestamp: "10:37 AM",
      type: "text"
    },
    {
      id: 5,
      senderId: 1,
      senderName: "You",
      content: "I've also attached the latest prototype with some micro-interactions. Take a look and let me know what you think!",
      timestamp: "10:38 AM",
      type: "text",
      attachment: {
        name: "prototype-v2.fig",
        size: "2.4 MB",
        type: "figma"
      }
    },
    {
      id: 6,
      senderId: 2,
      senderName: "Alex Thompson", 
      content: "Thanks for the update on the project. Looking great so far!",
      timestamp: "2m ago",
      type: "text"
    }
  ];

  const currentConversation = conversations.find(c => c.id === selectedConversation);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      // Mock sending message
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-upwork-light-gray">
      {/* Header */}
      <header className="bg-white border-b border-border upwork-shadow sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link to="/freelancer-dashboard" className="flex items-center text-muted-foreground hover:text-foreground lg:hidden">
                <ArrowLeft size={20} className="mr-2" />
                Back
              </Link>
              <Link to="/freelancer-dashboard" className="text-2xl font-bold text-upwork-green">
                Upwork
              </Link>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link to="/find-work" className="text-foreground hover:text-upwork-green">
                Find Work
              </Link>
              <Link to="/my-jobs" className="text-foreground hover:text-upwork-green">
                My Jobs
              </Link>
              <Link to="/messages" className="text-upwork-green font-medium">
                Messages
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-8rem)]">
          {/* Conversations List */}
          <div className={`lg:block ${selectedConversation ? 'hidden lg:block' : 'block'}`}>
            <Card className="upwork-shadow h-full flex flex-col">
              <div className="p-4 border-b border-border">
                <h2 className="text-xl font-semibold mb-4">Messages</h2>
                <div className="relative">
                  <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search conversations..."
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="flex-1 overflow-y-auto">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation.id)}
                    className={`p-4 border-b border-border cursor-pointer hover:bg-upwork-light-green/10 transition-colors ${
                      selectedConversation === conversation.id ? 'bg-upwork-light-green/20 border-r-4 border-r-upwork-green' : ''
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="relative">
                        <Avatar>
                          <AvatarImage src={conversation.avatar} />
                          <AvatarFallback>{conversation.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        {conversation.online && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-medium truncate">{conversation.name}</h3>
                          <div className="flex items-center space-x-2">
                            {conversation.unreadCount > 0 && (
                              <Badge className="bg-upwork-green text-white text-xs min-w-[20px] h-5 flex items-center justify-center">
                                {conversation.unreadCount}
                              </Badge>
                            )}
                            <span className="text-xs text-muted-foreground">{conversation.lastMessageTime}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{conversation.project}</p>
                        <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Chat Area */}
          <div className={`lg:col-span-2 ${selectedConversation ? 'block' : 'hidden lg:block'}`}>
            {currentConversation ? (
              <Card className="upwork-shadow h-full flex flex-col">
                {/* Chat Header */}
                <div className="p-4 border-b border-border flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="lg:hidden"
                      onClick={() => setSelectedConversation(0)}
                    >
                      <ArrowLeft size={16} />
                    </Button>
                    <Avatar>
                      <AvatarImage src={currentConversation.avatar} />
                      <AvatarFallback>{currentConversation.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{currentConversation.name}</h3>
                      <p className="text-sm text-muted-foreground">{currentConversation.project}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Phone size={16} />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Video size={16} />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreVertical size={16} />
                    </Button>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.senderId === 1 ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-xs lg:max-w-md ${message.senderId === 1 ? 'order-2' : 'order-1'}`}>
                        <div
                          className={`rounded-lg p-3 ${
                            message.senderId === 1
                              ? 'bg-upwork-green text-white'
                              : 'bg-white border border-border'
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          {message.attachment && (
                            <div className="mt-2 p-2 bg-white/10 rounded border">
                              <div className="flex items-center space-x-2">
                                <Paperclip size={14} />
                                <div>
                                  <p className="text-xs font-medium">{message.attachment.name}</p>
                                  <p className="text-xs opacity-75">{message.attachment.size}</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        <p className={`text-xs text-muted-foreground mt-1 ${message.senderId === 1 ? 'text-right' : 'text-left'}`}>
                          {message.timestamp}
                        </p>
                      </div>
                      
                      {message.senderId !== 1 && (
                        <Avatar className="w-8 h-8 order-1 mr-2">
                          <AvatarImage src={currentConversation.avatar} />
                          <AvatarFallback>{currentConversation.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-border">
                  <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                    <Button type="button" variant="ghost" size="sm">
                      <Paperclip size={16} />
                    </Button>
                    <Input
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type a message..."
                      className="flex-1"
                    />
                    <Button type="submit" className="btn-primary" disabled={!newMessage.trim()}>
                      <Send size={16} />
                    </Button>
                  </form>
                </div>
              </Card>
            ) : (
              <Card className="upwork-shadow h-full flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">Select a conversation</h3>
                  <p className="text-muted-foreground">Choose a conversation from the list to start messaging</p>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;