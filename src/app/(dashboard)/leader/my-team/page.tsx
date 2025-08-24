"use client";

import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TeamDetails = () => {
  // --- Demo Data ---
  const team = {
    name: "Frontend Wizards",
    status: "ACTIVE",
    createdAt: "2024-07-01T10:15:00.000Z",
  };

  const members = [
    {
      fullName: "Alice Johnson",
      email: "alice@example.com",
      phone: "+1 555 123 456",
      image: "",
    },
    {
      fullName: "Bob Smith",
      email: "bob@example.com",
      phone: "+1 555 987 654",
      image: "",
    },
    {
      fullName: "Charlie Brown",
      email: "charlie@example.com",
      phone: "+1 555 111 222",
      image: "",
    },
  ];

  return (
    <div className="">
      <Card className="h-[calc(100vh-120px)] shadow-none border-0">
        {/* Header */}
        <CardContent className=" flex flex-col md:flex-row md:items-center md:justify-between gap-4 ">
          <div>
            <h1 className="text-2xl font-bold">{team.name}</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Created At: {format(new Date(team.createdAt), "PPpp")}
            </p>
          </div>
          <div>
            <Badge variant={team.status === "ACTIVE" ? "default" : "secondary"}>
              {team.status}
            </Badge>
          </div>
        </CardContent>
        <hr />
        {/* Members Grid */}
        <CardFooter className="flex flex-col items-start gap-3 w-full">
          <h2 className="text-lg font-semibold">Team Members</h2>

          {members.length > 0 ? (
            <div className="flex flex-wrap gap-4 w-full">
              {members.map((member, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-md border p-3"
                >
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={member.image || undefined} />
                    <AvatarFallback>
                      {member.fullName
                        ? member.fullName.charAt(0).toUpperCase()
                        : "U"}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{member.fullName}</p>
                    <p className="text-sm text-muted-foreground">
                      {member.email}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {member.phone}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              No members in this team.
            </p>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default TeamDetails;
