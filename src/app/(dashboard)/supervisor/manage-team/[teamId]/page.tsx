/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import LoadingData from "@/components/ui_components/loading/loading_data";
import {
  useGetTeamdetailsQuery,
  useGetTeamMemberListQuery,
} from "@/redux/api/team_api/team_api";
import { useParams } from "next/navigation";
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TeamDetails = () => {
  const { teamId } = useParams();
  const { data, isLoading } = useGetTeamdetailsQuery(teamId as string, {
    skip: !teamId,
  });
  const { data: dataTwo, isLoading: isLoadingTwo } = useGetTeamMemberListQuery(
    teamId as string,
    { skip: !teamId }
  );

  if (isLoading || isLoadingTwo) {
    return <LoadingData />;
  }

  const team = data?.data;
  const members = dataTwo?.data || [];

  if (!team) {
    return <div className="p-4">No team details found</div>;
  }

  return (
    <div className="p-6">
      <Card className="h-[calc(100vh-120px)] shadow-none border-0">
        {/* Header */}
        <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 ">
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
              {members.map((member: any, index: number) => (
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
